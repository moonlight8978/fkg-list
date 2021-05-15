import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Unit } from 'fkg-list-types'

interface FlowerKnightGirl extends Unit.Simple {
  id: string
}

const attributeText = (value: Unit.Attribute): string => {
  switch (value) {
    case Unit.Attribute.blue:
      return '打'

    case Unit.Attribute.red:
      return '斬'

    case Unit.Attribute.yellow:
      return '突'

    default:
      return '魔'
  }
}

const favoriteText = (value: Unit.Favorite): string => {
  switch (value) {
    case Unit.Favorite.cake:
      return 'ケーキ'

    case Unit.Favorite.book:
      return '本'

    case Unit.Favorite.doll:
      return 'ぬいぐるみ'

    default:
      return '宝石'
  }
}

const totalStats = (unit: FlowerKnightGirl) => unit.hp + unit.attack + unit.defense

function App() {
  const [units, setUnits] = useState<FlowerKnightGirl[]>([])

  useEffect(() => {
    async function fetchUnits() {
      const response = await axios.get<any, AxiosResponse<Unit.Simple[]>>('/units-simple.json')
      const responseUnits = response.data.map((unit) => ({ ...unit, id: `${unit.code}-${unit.star}` }))
      // .filter((unit) => unit.attribute === 2 && unit.star === 5)
      // responseUnits.sort((firstUnit, secondUnit) => {
      //   return totalStats(secondUnit) - totalStats(firstUnit)
      // })
      setUnits(responseUnits)
    }

    fetchUnits()
  }, [])

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">名前</th>
            <th scope="col">属性</th>
            <th scope="col">レア度</th>
            <th scope="col">総合力</th>
            <th scope="col">HP</th>
            <th scope="col">攻撃力</th>
            <th scope="col">防御力</th>
            <th scope="col">好きな物</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.code}</td>
              <td>{unit.name}</td>
              <td>{attributeText(unit.attribute)}</td>
              <td>★{unit.star}</td>
              <td>{totalStats(unit)}</td>
              <td>{unit.hp}</td>
              <td>{unit.attack}</td>
              <td>{unit.defense}</td>
              <td>{favoriteText(unit.favorite)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
