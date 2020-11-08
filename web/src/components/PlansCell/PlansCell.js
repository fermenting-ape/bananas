import { Link, routes } from '@redwoodjs/router'

import Plans from 'src/components/Plans'

export const QUERY = gql`
  query PLANS {
    plans {
      id
      name
      interval
      size
      price
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No plans yet. '}
      <Link to={routes.newPlan()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ plans }) => {
  return <Plans plans={plans} />
}
