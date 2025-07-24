import { useMutation } from '@tanstack/vue-query'
import api from './axios'

export const useSubmitAuth = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string; otp: string }) => {
      const res = await api.post('/auth', data)
      return res.data
    }
  })
}
