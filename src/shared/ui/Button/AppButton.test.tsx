import AppButton from "./AppButton";
import {render, screen} from "@testing-library/react";

describe('AppButton', () => {
  test('test', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});