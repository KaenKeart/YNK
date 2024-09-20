import Footer from "./Footer";
import Navbar from "./Navbar";
import YNK_API01 from "./YNK_API01"
import Climate from "./Climate_API";

function Page01() {


  return (
    <div>
      <Navbar />
      <YNK_API01 />
      <Climate />
      <Footer />
    </div>
  );
}
export default Page01;
