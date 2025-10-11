import { Timeline } from "@/components/ui/timeline";
import { TimelineEntry } from "./experince-fragment";

interface TimelineJourneyProps {
  data: TimelineEntry[];
}

const TimelineJourney = ({ data }: TimelineJourneyProps) => {
  return (
    <>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </>
  );
};

export default TimelineJourney;
