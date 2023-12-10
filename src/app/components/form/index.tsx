'use client'

import { useEffect, useState } from 'react'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function FormComplete() {
  const [code, setCode] = useState('')
  const [verified, setVerified] = useState(false)

  const verifyCode = () => {
    if (code === '1234') {
      setVerified(true)
    } else {
      setVerified(false)
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
                <Input id="second-input" placeholder="Preencha com seu nome completo" />
              </div>
              <div className="border-t pt-4 space-y-2">
                <Label htmlFor="second-input">E-mail</Label>
                <Input id="second-input" placeholder="Preencha com um e-mail válido" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="third-input">Contato whatsapp</Label>
                <Input id="third-input" placeholder="Preencha com seu número de whatsapp" />
                <Button className="w-full mt-2" type="submit">
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
