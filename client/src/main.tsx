import ReactDOM from 'react-dom/client'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store.tsx'

import { validateLicense } from '@syncfusion/ej2-base'
validateLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIfEx0RXxbf1xzZFRHal1QTnZdUj0eQnxTdEZiWH1ecndUR2BfVkZ3XA==')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Provider>
  </>
)
