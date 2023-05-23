import Expression from "@components/Expression"
import Numbers from "@components/Numbers"
const Home = () => {
  return (
    <section className="w-full flex-col">
        <h1 className="head_text blue_gradient">
            Expression conversion
        </h1>
        <Expression/>
        <h1 className="head_text blue_gradient">
            Number conversion
        </h1>
        <Numbers/>
    </section>
  )
}

export default Home