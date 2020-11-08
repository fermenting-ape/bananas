import PlansLayout from 'src/layouts/PlansLayout'
import PlanCell from 'src/components/PlanCell'

const PlanPage = ({ id }) => {
  return (
    <PlansLayout>
      <PlanCell id={id} />
    </PlansLayout>
  )
}

export default PlanPage
