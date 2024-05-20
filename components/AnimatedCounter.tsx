'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimal=","
        prefix="$"
        end={amount}
        decimals={2}
        duration={2.75}
        separator="."
      />
    </div>
  )
}

export default AnimatedCounter
