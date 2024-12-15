import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { type FC } from 'react'

const InformationQuanta: FC = () => {
  return (
    <Tabs defaultValue="aris" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="aris">Aris</TabsTrigger>
        <TabsTrigger value="iset">Исеть</TabsTrigger>
        <TabsTrigger value="granit">Гранит</TabsTrigger>
        <TabsTrigger value="telecontrol">Телеконтроль</TabsTrigger>
      </TabsList>
      <TabsContent value="aris">
        <Card>
          <CardHeader className='p-3'>
            <CardTitle>Кванты Aris</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div>
              <p>Инфа арис</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="iset">
        <Card>
          <CardHeader className='p-3'>
            <CardTitle>Кванты Исети</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div>
              <p>Инфа Исеть</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="granit">
        <Card>
          <CardHeader className='p-3'>
            <CardTitle>Кванты Гранита</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div>
              <p>Инфа Гранит. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim unde repellendus. Iusto, non exercitationem voluptas nobis aperiam, culpa earum fugiat quo laboriosam delectus voluptates nemo error pariatur molestias! Quis.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="telecontrol">
        <Card>
          <CardHeader className='p-3'>
            <CardTitle>Кванты Телеконтроля</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div>
              <p>Инфа Гранит. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur enim unde repellendus. Iusto, non exercitationem voluptas nobis aperiam, culpa earum fugiat quo laboriosam delectus voluptates nemo error pariatur molestias! Quis.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default InformationQuanta
