interface EnvironmentInterface {
  mode: string;
  endpoint: string;
}

export const ENV: EnvironmentInterface = {
  /** DEV */
  mode: 'dev',
  endpoint: 'http://www.dds.gov.co/'

  /** TEST */
  // mode: 'test',
  // endpoint: 'http://www.dds.gov.co/'

  /** PRO */
  // mode: 'pro',
  // endpoint: 'http://www.dds.gov.co/'
};
