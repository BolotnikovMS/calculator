import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { quantaData } from '@/data/quantaData'
import { type FC } from 'react'

const InformationQuanta: FC = () => {
  return (
    <Tabs defaultValue="aris" className="w-[400px]">
      <TabsList>
        {quantaData.map(item => (
          <TabsTrigger key={item.device} value={item.device}>{item.name}</TabsTrigger>
        ))}
      </TabsList>
      {quantaData.map(item => (
        <TabsContent key={item.device} value={item.device}>
          <Card>
            <CardHeader className='p-3'>
              <CardTitle>Информация по '{item.name}'</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <div>
                <p>{item.description}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default InformationQuanta
