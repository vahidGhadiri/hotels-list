export interface HeadersBuilderInterface {
  addIf(
    condition: boolean,
    key: string,
    value: string | null | undefined
  ): this;
  add(key: string, value: string | null | undefined): this;
  build(): Record<string, string>;
  remove(key: string): this;
  reset(): this;
}

export default class HeadersBuilder implements HeadersBuilderInterface {
  private headers: Record<string, string> = {};

  public add(key: string, value: string | null | undefined): this {
    if (value != null) {
      this.headers[key] = value;
    }
    return this;
  }

  public addIf(
    condition: boolean,
    key: string,
    value: string | null | undefined
  ): this {
    if (condition && value != null) {
      this.headers[key] = value;
    }
    return this;
  }

  public reset(): this {
    this.headers = {};
    return this;
  }

  public remove(key: string): this {
    delete this.headers[key];
    return this;
  }

  public build(): Record<string, string> {
    return { ...this.headers };
  }
}
