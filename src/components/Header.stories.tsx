import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import avatar from "@/assets/avatar.jpg";
import { Button } from "./Button";
import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Шапка сайту: бренд (аватар і ім'я), навігація, кнопки дій. Липка, з ефектом матового скла.

**Параметри**
- \`brandName\`: ім'я або назва бренду.
- \`avatar\`: аватар, картинка з теки \`assets\`.
- \`brandHref\`: куди веде клік по бренду (за замовчуванням \`#top\`).
- \`activeId\`: \`id\` активного пункту меню.
- \`actions\`: кнопки праворуч, наприклад дві \`Button\` з \`href\`.

**Варіанти й стани**
Варіант один. Бренд має hover (підкреслення) і focus (контур \`ink\` з відступом). Пункти меню й кнопки мають свої стани. На вузькому екрані (менше брейкпоінта \`md\`) лишаються аватар, ім'я приховується до \`sm\`, а меню згортається в кнопку; \`actions\` ховаються. Вузький екран дивись через Viewport у тулбарі.

**Токени**
- Кольори: \`canvas\` з прозорістю (скло), \`line\`, \`ink\`.
- Ефекти: \`backdrop-blur-glass\` (токен \`--blur-glass\`).
- Текст: \`text-label\`, \`font-display\`.
- Кути: \`rounded-card\` (шапка), \`rounded-control\` (аватар).
- Пропорція аватара: \`aspect-avatar\`.
- Відступи: \`px-3 py-2\`, проміжки \`gap-3\`, \`gap-6\`.

**Коли використовувати**
Одна шапка на сторінку, зверху. Липка: лишається видимою при прокручуванні.

**Коли не використовувати**
Не клади в шапку більше двох кнопок дій і більше п'яти пунктів меню.

**Як брати в код**
\`\`\`tsx
import avatar from "@/assets/avatar.jpg";
import { Header } from "@/components/Header";

<Header
  brandName="Tetiana Marienkova"
  avatar={avatar}
  actions={<Button href="#" variant="secondary">LinkedIn</Button>}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    brandName: { control: "text" },
    brandHref: { control: "text" },
    activeId: {
      control: "select",
      options: ["", "work", "process", "about", "contact"],
    },
    avatar: { control: false },
    actions: { control: false },
  },
  args: {
    brandName: "Tetiana Marienkova",
    avatar,
    brandHref: "#top",
    activeId: "",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Header
      {...args}
      actions={
        <>
          <Button href="#" variant="secondary">
            LinkedIn
          </Button>
          <Button href="#">Resume (PDF)</Button>
        </>
      }
    />
  ),
};
