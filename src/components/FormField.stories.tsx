import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Текстове поле з підписом для форм: ім'я, пошта, повідомлення. Підпис завжди над полем, текст помилки під ним.

**Параметри**
- \`label\`: підпис над полем (обов'язковий).
- \`defaultValue\`: значення поля; непорожнє значення — це стан «заповнене».
- \`error\`: стан помилки.
- \`errorText\`: текст помилки під полем, показується разом з \`error\`.
- \`disabled\`: вимкнене поле.
- решта атрибутів звичайного \`input\` (\`name\`, \`type\`, \`placeholder\`, \`onChange\`) передаються далі.

**Варіанти й стани**
- default: межа \`ink-muted\`, фон \`canvas\`, текст \`ink\`, підказка в полі \`ink-muted\`.
- hover: межа стає \`ink\`.
- focus: контур \`ink\` з відступом, видно при навігації клавішею Tab.
- заповнене: те саме, що default, але з текстом \`ink\`.
- помилка: межа \`danger\`, під полем іконка помилки й текст \`danger\`; поле позначено \`aria-invalid\` і зв'язане з текстом помилки через \`aria-describedby\`.
- disabled: заливка \`surface\`, текст \`ink-muted\`, курсор «заборонено», підпис \`ink-muted\`; фокус на поле не переходить.

**Токени**
- Кольори: \`ink\`, \`ink-muted\`, \`canvas\`, \`surface\`, \`danger\`.
- Текст: підпис \`text-label\` з \`font-display\`; значення \`text-body\` з \`font-text\`; помилка \`text-caption\`.
- Кути: \`rounded-control\`.
- Відступи: поле \`px-4 py-3\`, проміжок між підписом, полем і помилкою \`gap-2\`.

**Коли використовувати**
Для введення короткого тексту в формі: ім'я, пошта, тема. Кожне поле має підпис.

**Коли не використовувати**
Не заміняй підпис підказкою всередині поля: вона зникає, коли користувач починає писати. Для довгого тексту потрібне окреме багаторядкове поле. Помилку завжди супроводжуй текстом, а не лише кольором.

**Як брати в код**
\`\`\`tsx
import { FormField } from "@/components/FormField";

<FormField label="Name" name="name" placeholder="Your name" />
<FormField label="Email" type="email" error errorText="Enter a valid email." />
<FormField label="Name" disabled defaultValue="Tetiana" />
\`\`\`
`,
      },
    },
  },
  argTypes: {
    defaultValue: { control: "text", name: "defaultValue (значення)" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Name",
    placeholder: "Your name",
    defaultValue: "",
    error: false,
    errorText: "Enter your name.",
    disabled: false,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

// key makes the field redraw when the value is changed in Controls:
// an uncontrolled input ignores later changes of defaultValue.
export const Playground: Story = {
  render: (args) => <FormField key={String(args.defaultValue)} {...args} />,
};
