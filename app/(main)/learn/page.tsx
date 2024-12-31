import { Header } from "./header";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWwrapper } from "@/components/stick-wraper";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWwrapper>
        <UserProgress
          activeCourse={{ title: "Portuguese", imageSrc: "/br.svg" }}
          hearths={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWwrapper>
      <FeedWrapper>
        <Header title="Portuguese"></Header>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
