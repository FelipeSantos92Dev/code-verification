'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function FormComplete() {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [verified, setVerified] = useState(false)

  const apiURL = '/api/v1/tickets/'

  const verifyCode = async () => {
    if (!code) {
      toast.error('Código de cortesia inválido')
      return
    }

    try {
      const response = await axios.get(`${apiURL}${code}`)
      const ticket = response.data

      if (!ticket.verified) {
        setVerified(true)
        toast.success('Código verificado com sucesso!')
      } else {
        setVerified(false)
        toast.error('Código já utilizado!')
      }
    } catch (err) {
      setVerified(false)
      toast.error('Código de cortesia inválido')
    }
  }

  const handleSubmit = async () => {
    if (!name || !email || !whatsapp) {
      toast.error('Preencha todos os campos')
      return
    }
    try {
      const response = await axios.patch(`${apiURL}${code}`, {
        name,
        email,
        whatsapp
      })
      const ticket = response.data

      if (ticket.verified) {
        setVerified(false)
        setCode('')
        setName('')
        setEmail('')
        toast.success('Cortesia cadastrada com sucesso!')
      } else {
        toast.error('Código já utilizado!')
      }
    } catch (err) {
      toast.error('Código de cortesia inválido')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle className={`text-center`}>Vale Cortesia AnimeGeek 2024</CardTitle>
          <CardDescription className={`text-center`}>Preencha os dados a seguir</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="initial-input">Código de cortesia</Label>
            <Input
              id="initial-input"
              placeholder="Preencha o código de cortesia"
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
              <div className="border-t pt-4 space-y-2">
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
