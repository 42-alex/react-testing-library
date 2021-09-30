import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('select', () => {
  it('select testing', () => {
    const { getByText, getByRole } = render(
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    )

    const select = getByRole('combobox');          // implicit role of select is "combobox" but if we use the attribute "multiple" on select then its role will be "listbox"
    userEvent.selectOptions(select, '1');         // select the option with value "1"
    expect(getByText('A').selected).toBeTruthy();  // check if select shows text "A" (option "A" was selected)

    userEvent.selectOptions(select, '2');        // select the next option, this time with value "2"
    expect(getByText('B').selected).toBeTruthy();  // check if select shows text "B" (option "B" was selected)
    expect(getByText('A').selected).toBeFalsy();   // check if select doesn't show text "A" anymore (option "A" is not selected)
  })
})