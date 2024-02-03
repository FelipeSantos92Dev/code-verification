'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { QrScanner } from '@yudiel/react-qr-scanner'
import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Credenciamento() {
  const [code, setCode] = useState('')

  const apiURL = '/api/v1/tickets/'

  const verifyCode = async (e: any) => {
    e.preventDefault()
    if (code.length < 1) {
      toast.error('Preencha o código de cortesia')
      return
    }

    try {
      await axios.post(apiURL, { code })
      toast.success('Cortesia cadastrada com sucesso')
      setCode('')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (err) {
      toast.error('Erro ao cadastrar cortesia')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="space-y-4">
        <QrScanner onDecode={result => setCode(result)} onError={error => console.log(error?.message)} />
        <CardHeader>
          <CardTitle className={`text-center`}>Cadastro Cortesia AnimeGeek 2024</CardTitle>
          <CardDescription className={`text-center`}>Insira o código da cortesia</CardDescription>
        </CardHeader>
        <form onSubmit={verifyCode}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="initial-input">QR Code do Ingresso</Label>
              <Input
                id="initial-input"
                placeholder="Preencha o código de cortesia"
                value={code}
                onChange={e => setCode(e.target.value)}
                autoFocus
              />
              <Button className="w-full" type={'submit'}>
                Validar
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  )
}
