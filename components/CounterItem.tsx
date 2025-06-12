// components/CounterItem.tsx

import { GlitchNumber } from "./ui/GlitchNumber";

interface CounterItemProps {
  icon: string;
  value: number;
  label: string;
  delay?: number;
  visible?: any
}

export default function CounterItem({
  icon,
  value,
  label,
  visible
}: CounterItemProps) {
  return (
    <div
      className="col-sm-6 col-lg-3 mt-1-9 wow fadeInUp"
    >
      <div className="counter-style01 text-center text-white">
        <div className="counter-icon mb-3">
          <img src={icon} alt="icon" className="w-55px" />
        </div>
        <div className="display-15 display-sm-10 lh-1 font-weight-700">
          {visible ? <GlitchNumber targetValue={Number(value)} /> : value}
        </div>
        <h5 className="mb-0">{label}</h5>
      </div>
    </div>
  );
}
