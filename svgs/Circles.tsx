import { circleProps } from "../types";

const Circles: React.FC<circleProps> = ({ className }) => {
  return (
    <div
      className={`fixed ${className} p-[4rem] rounded-full border border-gray-400`}
      aria-hidden="true"
    >
      <div className="p-[4rem] rounded-full border border-gray-400">
        <div className="p-[4rem] rounded-full border border-gray-400">
          <div className="p-[4rem] rounded-full border border-gray-400">
            <div className="p-[4rem] rounded-full border border-gray-400">
              <div className="p-[4rem] rounded-full border border-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circles;
