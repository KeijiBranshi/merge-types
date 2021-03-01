type Version = string;

type Versioned = {
  version: Version;
};

export type IteratesOn<
  T extends Versioned,
  NextVersion extends Version,
  Implementation
> = Partial<Omit<T, "version" | keyof Implementation>> & {
  version: Exclude<NextVersion, T["version"]>;
} & Implementation;
