import request from './request'

export const getAccessToken = (data: any) => request.post('/oauth/token', data)
