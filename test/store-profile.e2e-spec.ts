import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizza do Byano')
  await page.getByLabel('Descrição').fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = await page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  expect(page.getByRole('button', { name: 'Pizza do Byano' })).toBeVisible()
})
