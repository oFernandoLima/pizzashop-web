import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Fernando Lima',
      email: 'nando@example.com',
      phone: '88992887799',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
