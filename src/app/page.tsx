import FormComplete from './components/form'

export default function Home() {
  return (
    <div className={`flex-col`}>
      <div className={`flex-1 space-y-4 p-8 pt-20`}>
        <FormComplete />
      </div>
    </div>
  )
}
