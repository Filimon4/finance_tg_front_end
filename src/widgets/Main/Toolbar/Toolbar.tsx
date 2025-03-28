import { ToolCategories } from "@components/Toolbar/ToolCategories/ToolCategories";
import Overview from "@components/Toolbar/Overview/Overview";
import History from "@components/Toolbar/History/History";
import WhitePanelContainer from "@shared/components/containers/WhitePanelContainer/WhitePanelContainer";
import { useToolbarCategory } from "@shared/contexts/ToolbarCategory/useToolbarCategory";
import { ToolbarCategories } from "@shared/types/Toolbar";
import Accounts from "@components/Toolbar/Accounts/Accounts";
import Categories from "@components/Toolbar/Categories/Categories";

const Toolbar = () => {
  const { currentCategory } = useToolbarCategory();

  const toolbarRouter = {
    [ToolbarCategories.overview]: <Overview />,
    [ToolbarCategories.accounts]: <Accounts />,
    [ToolbarCategories.history]: <History />,
    [ToolbarCategories.summary]: <Categories />,
  };

  return (
    <div className="h-full w-full flex flex-col gap-1">
      <ToolCategories />
      <WhitePanelContainer>
        {toolbarRouter[currentCategory]}
      </WhitePanelContainer>
    </div>
  );
};

export default Toolbar;
