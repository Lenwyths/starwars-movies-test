import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime'

export const createRelayEnvironment = ({
  url,
}: {
  url: string
}): Environment => {
  const fetchQuery: FetchFunction = async (operation, variables) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    })
    
    return await response.json()
  }

  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  })
}
