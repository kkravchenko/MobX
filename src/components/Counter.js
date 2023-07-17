import { observer } from 'mobx-react-lite'
import counterStore from '@/stores/counter-store'

export const Counter = observer(() => {
  const { count, total, increment, decrement } = counterStore
  return (
    <>
      <button onClick={() => increment(1)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(1)}>-</button>
      <span>{total}</span>
    </>
  )
})
