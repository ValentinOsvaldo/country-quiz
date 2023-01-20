import { Option } from '../Option/Option';

interface Props {
  options: string[];
}

export const Options: React.FC<Props> = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <Option key={option} option={option} index={index} />
      ))}
    </div>
  );
};
