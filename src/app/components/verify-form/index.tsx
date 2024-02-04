'use client'

import { useEffect, useState } from 'react'
import { QrScanner } from '@yudiel/react-qr-scanner'

import { toast } from 'react-hot-toast'
import axios from 'axios'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function VerifyForm() {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [verified, setVerified] = useState(false)

  const apiURL = 'api/v1/tickets/'

  const verifyCode = async () => {
    if (code.length < 1) {
      toast.error('Preencha o código do ingresso')
      return
    }

    try {
      const response = await axios.get(apiURL + code)
      const ticket = response.data

      if (ticket.verified) {
        toast.error('Ingresso já utilizado')
        return
      }

      if (ticket) {
        setVerified(true)
        toast.success('Ingresso verificado')
      } else {
        toast.error('Ingresso inválido')
      }
    } catch (err) {
      toast.error('Ingresso inválido')
    }
  }

  const handleSubmit = async () => {
    if (name.length < 1) {
      toast.error('Preencha o nome completo')
      return
    }

    if (email.length < 1) {
      toast.error('Preencha o e-mail')
      return
    }

    if (whatsapp.length < 1) {
      toast.error('Preencha o número de whatsapp')
      return
    }

    const data = {
      name,
      email,
      whatsapp
    }

    try {
      const response = await axios.patch(apiURL + code, data)
      const ticket = response.data

      if (ticket) {
        toast.success('ingresso cadastrada com sucesso!')
        setCode('')
        setName('')
        setEmail('')
        setWhatsapp('')
        setVerified(false)
      } else {
        toast.error('Erro ao cadastrar ingresso!')
      }
    } catch (err) {
      toast.error('Erro ao cadastrar ingresso!')
    }
  }

  return (
    <div className={'w-full max-w-md mx-auto'}>
      <div className={`text-center text-sm text-gray-500 mb-4`}>
        Voltar para o portal{' '}
        <a href="https://carnageek.meusticketsoficial.com.br">
          <span className={`text-blue-500 hover:text-blue-600`}>MeusTickets</span>
        </a>
      </div>
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle className={`text-center`}>Credenciamento CarnaGeek 2024</CardTitle>
          <CardDescription className={`text-center`}>Posicione o QR Code na área indicada</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <QrScanner
              onDecode={result => setCode(result)}
              onError={error => console.log(error?.message)}
              scanDelay={1000}
            />
            <Label htmlFor="initial-input">Código do ingresso</Label>
            <Input
              id="initial-input"
              placeholder="Preencha o Ingresso"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            <Button className="w-full" onClick={verifyCode}>
              Verificar
            </Button>
          </div>

          {verified && (
            <>
              <div className="border-t pt-4 space-y-2">
                <Label htmlFor="second-input">Nome Completo</Label>
                <Input
                  id="second-input"
                  placeholder="Preencha com seu nome completo"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="second-input">E-mail</Label>
                <Input
                  id="second-input"
                  placeholder="Preencha com um e-mail válido"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="third-input">Contato whatsapp</Label>
                <Input
                  id="third-input"
                  placeholder="Preencha com seu número de whatsapp"
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                />
                <Button className="w-full mt-2" onClick={handleSubmit}>
                  Enviar
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
