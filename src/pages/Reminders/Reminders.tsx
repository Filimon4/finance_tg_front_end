import NavigationButton from "@shared/components/Buttons/NavigationButton/NavigationButton";
import { MainContainer } from "@shared/components/containers/MainContainer/MainContainer";
import WhitePanelContainer from "@shared/components/containers/WhitePanelContainer/WhitePanelContainer";
import BoxInfo from "@shared/components/Info/BoxInfo/BoxInfo";
import { ERoutes } from "@shared/types/Routes";
import { useQuery } from "@tanstack/react-query";
import Header from "@widgets/Main/Header/Header";
import axios from "axios";

const Reminders = () => {
  const { data: allReminders } = useQuery<{ data: { all: any[] } }>({
    queryKey: ["reminders"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BACK_END_URL}/api/reminders/all`,
        {
          params: {
            // tg_id: window?.Telegram.WebApp.initDataUnsafe?.user?.id || 1289261150,
            tg_id: 1289261150,
          },
        }
      );
      return res;
    },
    staleTime: 30000,
  });

  return (
    <MainContainer>
      <div className={`flex flex-col gap-2 justify-between h-full text-white`}>
        <Header />
        <div className="flex flex-col h-full py-5 text-lg">
          <div className="flex flex-2 pl-8 items-end w-full">
            <h1 className="pb-7 text-3xl">Напоминания</h1>
          </div>
          <div className="h-full w-full flex flex-col flex-8 gap-1">
            <WhitePanelContainer>
              <div className="h-full flex flex-col justify-between gap-5">
                <div>
                  {allReminders &&
                  "operations" in allReminders.data &&
                  allReminders.data?.all?.length > 0 ? (
                    allReminders.data.all.map((_rem, i) => (
                      <BoxInfo style={"squre"} key={i}>
                        <div className="flex flex-row justify-between items-center w-full h-full px-3">
                          <p>{"Пон. 10:00"}</p>
                        </div>
                      </BoxInfo>
                    ))
                  ) : (
                    <>
                      <p className="flex w-full justify-center">Нет операций</p>
                    </>
                  )}
                </div>

                <NavigationButton link={ERoutes.reminder} style="round">
                  <div className="flex w-full justify-center items-center cursor-pointer text-black">
                    <p>Добавить напоминание</p>
                  </div>
                </NavigationButton>
              </div>
            </WhitePanelContainer>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Reminders;
