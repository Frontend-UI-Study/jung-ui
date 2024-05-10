import { Accordion } from '@jung/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion style={{ width: '375px' }} {...args}>
      <Accordion.Item>
        <Accordion.Trigger top={<div>Answered 2024.02.23 | Delete</div>}>
          What is the Virtual DOM and how does it work in React?
        </Accordion.Trigger>
        <Accordion.Content>
          <Accordion.Panel title="Answer">
            The Virtual DOM is a lightweight copy of the actual DOM used by
            React to optimize the update process. By rendering a virtual
            representation of the UI, React can minimize direct DOM
            manipulations and improve performance.
          </Accordion.Panel>
          <Accordion.Panel title="Follow-up Question 1">
            How does React determine what to re-render in the DOM when state
            changes?
          </Accordion.Panel>
          <Accordion.Panel title="Answer">
            React uses a diffing algorithm, which compares the previous and the
            new versions of the Virtual DOM to determine the minimal set of
            changes necessary to update the actual DOM.
          </Accordion.Panel>
          <Accordion.Panel title="Follow-up Question 2">
            What are the benefits of using the Virtual DOM compared to direct
            DOM manipulation?
          </Accordion.Panel>
          <Accordion.Panel title="Answer">
            Using the Virtual DOM reduces the cost of DOM updates, which can be
            performance-intensive. It allows for efficient updates by batching
            them and only touching the parts of the DOM that actually need to
            change.
          </Accordion.Panel>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger top={<div>Answered 2023.07.19 | Delete</div>}>
          Can you explain the difference between `var`, `let`, and `const` in
          JavaScript?
        </Accordion.Trigger>
        <Accordion.Content>
          <Accordion.Panel>
            `var` is function-scoped, while `let` and `const` are block-scoped.
            This scoping difference is crucial for managing variable visibility
            and lifecycle in JavaScript applications.
          </Accordion.Panel>
          <Accordion.Panel title="Follow-up Question 1">
            What issues might arise from using `var` in modern JavaScript?
          </Accordion.Panel>
          <Accordion.Panel title="Answer">
            Using `var` can lead to common issues like variable hoisting and
            unintended variable overriding, especially in loops or conditional
            blocks, which can introduce bugs and make code maintenance harder.
          </Accordion.Panel>
          <Accordion.Panel title="Follow-up Question 2">
            Why might you choose `const` over `let` when declaring a variable?
          </Accordion.Panel>
          <Accordion.Panel title="Answer">
            Choosing `const` helps enforce immutability for the variable's
            value, which can lead to safer, more predictable code. It's a best
            practice when the variable's value should not change after initial
            assignment.
          </Accordion.Panel>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
