import Breadcrumbs from "../../components/Breadcrumbs";
import Header2 from "../../components/Header2";
import OptionTab from "../../components/OptionTab";
import TopLoadingBar from "../../components/TopLoadingBar";

const NightLife = () => {
  return (
    <div>
      <TopLoadingBar/>
      <div>
        <Header2 />
        <div className="px-12">
          <Breadcrumbs />
        </div>
        <div>
          <OptionTab />
        </div>
      </div>
    </div>
  );
};

export default NightLife;
