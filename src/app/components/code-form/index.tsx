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
  const [quantity, setQuantity] = useState(0)

  const apiURL = '/api/v1/tickets/'

  const diminuir = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const aumentar = () => {
    setQuantity(quantity + 1)
  }

  const sell = async (e: any) => {
    e.preventDefault()
    if (quantity == 0) {
      toast.error('Preencha a quantidade de ingressos')
      return
    }

    try {
      await axios.post(apiURL, { quantity })
      toast.success('Ingresso(s) vendido(s) com sucesso')
      setCode('')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (err) {
      toast.error('Erro ao vender ingresso(s)')
    }
  }
  // const verifyCode = async (e: any) => {
  //   e.preventDefault()
  //   if (code.length < 1) {
  //     toast.error('Preencha o código de cortesia')
  //     return
  //   }

  //   try {
  //     await axios.post(apiURL, { code })
  //     toast.success('Cortesia cadastrada com sucesso')
  //     setCode('')
  //     setTimeout(() => {
  //       window.location.reload()
  //     }, 1000)
  //   } catch (err) {
  //     toast.error('Erro ao cadastrar cortesia')
  //   }
  // }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="space-y-4">
        <CardHeader>
          <CardTitle className={`text-center`}>Venda de Ingressos Portaria CarnaGeek 2024</CardTitle>
          <CardDescription className={`text-center`}>Insira a quantidade de ingressos vendidos</CardDescription>
        </CardHeader>
        <form onSubmit={sell}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {/* Botões para diminuir e aumentar a quantidade de ingressos com o valor entre eles */}

              <div className="flex justify-between items-center gap-5">
                <Button className="w-1/2" onClick={diminuir} type={'button'}>
                  -
                </Button>
                <p className={`text-center w-1/2`}>{quantity}</p>
                <Button className="w-1/2" onClick={aumentar} type={'button'}>
                  +
                </Button>
              </div>

              <Button className="w-full" type={'submit'}>
                Vender
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
    // <div className="w-full max-w-md mx-auto">
    //   <Card className="space-y-4">
    //     <CardHeader>
    //       <CardTitle className={`text-center`}>Cadastro Cortesia AnimeGeek 2024</CardTitle>
    //       <CardDescription className={`text-center`}>Insira o código da cortesia</CardDescription>
    //     </CardHeader>
    //     <form onSubmit={verifyCode}>
    //       <CardContent className="space-y-4">
    //         <div className="space-y-2">
    //           <Label htmlFor="initial-input">Código de cortesia</Label>
    //           <Input
    //             id="initial-input"
    //             placeholder="Preencha o código de cortesia"
    //             value={code}
    //             onChange={e => setCode(e.target.value)}
    //             autoFocus
    //           />
    //           <Button className="w-full" type={'submit'}>
    //             Criar
    //           </Button>
    //         </div>
    //       </CardContent>
    //     </form>
    //   </Card>
    // </div>
  )
}
