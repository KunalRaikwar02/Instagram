import { RouterProvider } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { AuthProvider } from './features/auth/auth.context'
import "../src/features/shared/global.scss"
import { PostContextProvider } from './features/post/post.context'

function App () {
  return (
    <AuthProvider>
      <PostContextProvider>
      <AppRoutes /> 
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App