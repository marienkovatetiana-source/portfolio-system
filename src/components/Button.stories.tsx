import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Кнопка для головних дій на сторінці: «View work», «Resume», «Написати мені».

**Параметри**
- \`variant\`: \`primary\` (за замовчуванням), \`secondary\`, \`ghost\` або \`soft\`.
- \`size\`: \`md\` (за замовчуванням) або \`lg\`.
- \`disabled\`: вимкнена кнопка (за замовчуванням вимкнено перемикач).
- \`disabledReason\`: пояснення під вимкненою кнопкою.
- \`arrow\`: кругла іконка-стрілка праворуч від тексту (коло \`accent-deep\`, стрілка \`accent\`; у основної кнопки при hover кольори міняються місцями), повертається на 45° при hover і focus.
- решта атрибутів кнопки або посилання (\`onClick\`, \`type\`, \`aria-*\`) передаються далі.

**Варіанти**
- \`primary\`: заливка \`accent\`, текст \`ink\`. Одна на блок, головна дія.
- \`secondary\`: без заливки, межа \`ink-muted\`, текст \`ink\`. Для другорядних дій поруч з основною.
- \`ghost\`: тільки текст \`ink-muted\`, без межі й заливки. Для третьорядних дій (LinkedIn у шапці).
- \`soft\`: заливка \`surface\` з м'якою тінню \`shadow-soft\`. Для дії на «підложці» (Resume у шапці).

**Стани**
- default: кольори варіанта.
- hover: основна стає \`accent-deep\` з текстом \`accent\`; другорядна, ghost і soft отримують заливку \`accent\`.
- focus: контур \`ink\` з відступом, видно при навігації клавішею Tab.
- disabled: \`aria-disabled\`, заливка \`surface\`, межа \`line\`, текст \`ink-muted\`. Кнопка лишається у фокусі, натискання нічого не робить, пояснення під нею зв'язане через \`aria-describedby\`.

**Токени**
- Кольори: \`accent\`, \`accent-deep\`, \`ink\`, \`ink-muted\`, \`canvas\`, \`surface\`, \`line\`.
- Тінь: \`shadow-soft\` (variant \`soft\`).
- Текст: \`text-button\`, \`font-display\`; пояснення: \`text-caption\`, \`font-text\`.
- Кути: \`rounded-control\`.
- Відступи: \`md\` — \`px-6 py-3\`, \`lg\` — \`px-8 py-4\`, проміжок до пояснення \`gap-2\`.

**Коли використовувати**
Для дії, яку виконує користувач: відкрити, надіслати. Основна кнопка одна на екран чи блок. Для переходу на сторінку чи якір дай \`href\`: це посилання з виглядом кнопки.

**Коли не використовувати**
Не став кілька основних кнопок поруч. Не вимикай кнопку без пояснення: завжди додавай \`disabledReason\`.

**Як брати в код**
\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="primary" size="lg">View work</Button>
<Button variant="secondary">Resume</Button>
<Button href="#work" size="lg" arrow>View work</Button>
<Button disabled disabledReason="Заповніть форму, щоб надіслати.">Надіслати</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "soft"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
    arrow: { control: "boolean" },
    href: { control: "text", description: "Порожнє значення: кнопка; з адресою: посилання." },
  },
  args: {
    children: "View work",
    variant: "primary",
    size: "md",
    disabled: false,
    disabledReason: "Заповніть форму, щоб надіслати.",
    arrow: false,
    href: "",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
