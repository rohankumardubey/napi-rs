window.BENCHMARK_DATA = {
  lastUpdate: 1634700377084,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          distinct: true,
          id: 'd164a7951415b0b09f8c7778690e3e444d0ac98e',
          message: 'ci: build and push arm docker images',
          timestamp: '2021-10-20T11:22:17+08:00',
          tree_id: '783d35793e56559b1fefb0ce7110983846d72f28',
          url: 'https://github.com/napi-rs/napi-rs/commit/d164a7951415b0b09f8c7778690e3e444d0ac98e',
        },
        date: 1634700375885,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 54675053,
            range: '±0.24%',
            unit: 'ops/sec',
            extra: '91 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 714431433,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 14987733,
            range: '±0.71%',
            unit: 'ops/sec',
            extra: '92 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 711697994,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 341072,
            range: '±11.78%',
            unit: 'ops/sec',
            extra: '67 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1935857,
            range: '±11.83%',
            unit: 'ops/sec',
            extra: '83 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 34735,
            range: '±0.19%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7965,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7834,
            range: '±0.19%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 17584,
            range: '±0.47%',
            unit: 'ops/sec',
            extra: '95 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 9466,
            range: '±0.04%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12062,
            range: '±0.29%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 358239,
            range: '±6.55%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 315449,
            range: '±6.33%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 324292,
            range: '±6.25%',
            unit: 'ops/sec',
            extra: '74 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 292947,
            range: '±6.28%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 38850,
            range: '±1.47%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 294,
            range: '±4.25%',
            unit: 'ops/sec',
            extra: '50 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 29550,
            range: '±0.91%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Query#query * 100',
            value: 2144,
            range: '±2.89%',
            unit: 'ops/sec',
            extra: '89 samples',
          },
          {
            name: 'Query#query * 1',
            value: 29694,
            range: '±0.62%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
        ],
      },
    ],
  },
}
