export type bonificationType = {
  active: boolean;
  key: string;
  name: string | null;
  value: number;
};

export type bonificationFunction<type> = (params: type | bonificationType) => never;

