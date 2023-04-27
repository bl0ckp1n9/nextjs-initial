import { API_ENDPOINTS } from '@/data/client/api-endpoints'
import { userClient } from '@/data/client/user'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'

import { Routes } from '../config/routes'

export function useLogin() {
  return useMutation(userClient.login)
}

export const useLogoutMutation = () => {
  const router = useRouter()

  return useMutation(userClient.logout, {
    onSuccess: () => {
      Cookies.remove('auth')
      router.replace(Routes.login)
    }
  })
}

export const useRegisterMutation = () => {
  const queryClient = useQueryClient()

  return useMutation(userClient.register, {
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.REGISTER)
    }
  })
}
