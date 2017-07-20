import renderer from 'react-test-renderer';
import Path from 'path';
import Pact from 'pact';

export const promiseComponent = (component, promise) => async () => {
  const renderedComponent = renderer.create(component);
  await promise;
  return renderedComponent;
};

export const promiseValue = (value) => new Promise(resolve => resolve(value));

const testApi = {
  host: 'localhost',
  port: 9999
};

export const mockApiConfig = {
  getApiUrl: () => `http://${testApi.host}:${testApi.port}`
};

export const createPact = (consumerName, providerName) => Pact({
  host: testApi.host,
  port: testApi.port,
  log: Path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: Path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  consumer: consumerName,
  provider: providerName
});