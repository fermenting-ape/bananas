import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query SubscriptionPlansQuery {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ plans }) => {
  return plans.map((plan) => (
    <article key={plan.id}>
      <header>
        <h2>
          <Link to={routes.subscriptionPlan({ id: plan.id })}>{plan.name}</Link>
        </h2>
      </header>
      <p>{plan.interval}</p>
      <p>{plan.size}</p>
      <p>{plan.price}</p>
      <p>{plan.description}</p>
    </article>
  ))
}
