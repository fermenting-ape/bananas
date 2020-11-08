import MainLayout from 'src/layouts/MainLayout'
import SubscriptionPlanCell from 'src/components/SubscriptionPlanCell'

const SubscriptionPlanPage = ({ id }) => {
  console.log(id)
  return (
    <MainLayout>
      <SubscriptionPlanCell id={id} />
    </MainLayout>
  )
}

export default SubscriptionPlanPage
