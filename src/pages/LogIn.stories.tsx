import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { LogIn } from './LogIn';

export default {
  title: 'Pages/LogIn',
  component: LogIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/login', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Logado com sucesso!'
          }))
        })
      ]
    }
  }
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'scali@dev.com');
    userEvent.type(canvas.getByPlaceholderText('******'), '12345');

    userEvent.click(canvas.getByRole('button'));

    await waitFor( () => {
      return expect(canvas.getByText('Logado com sucesso!')).toBeInTheDocument();
    },{})
  }
}