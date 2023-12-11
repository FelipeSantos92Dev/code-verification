'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function CodeForm() {
  const [code, setCode] = useState('')

  const apiURL = 'api/v1/tickets/'

  const verifyCode = async () => {
    if (code.length < 1) {
      toast.error('Preencha o código de cortesia')
      return
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle className={`text-center`}>Cadastro Cortesia AnimeGeek 2024</CardTitle>
          <CardDescription className={`text-center`}>Insira o código da cortesia</CardDescription>
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
              Criar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
