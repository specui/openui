export interface Spec {
  name: string;
  version: string;
  description: string;
  license: string;
  components: Record<
    string,
    {
      description: string;
      group: string;
      props: Record<
        string,
        {
          type: string;
          default: boolean | number | string;
          description: string;
        }
      >;
    }
  >;
}
