import request from './request'

interface Params {
  access_token: string
}
export const getAccessToken = (data: any) => request.post('/oauth/token', data)
export const getCreateRepos = (data: any) => request.post('/api/v5/user/repos', data)
export const getReposView = (params: Params) =>
  request.get('/api/v5/user/repos', {
    params: params
  })
