import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("sample app tests", () => {
  let wrapper, clickButton, clickedText;

  const getByTestId = (wrapper, id) => {
    return wrapper.find(`[data-testid="${id}"]`);
  };

  const IDS = {
    CLICK_BUTTON: "clickButton",
    CLICKED_TEXT: "clickedText",
  };

  const mountApp = () => {
    wrapper = mount(App);
    clickButton = getByTestId(wrapper, IDS.CLICK_BUTTON);
    clickedText = getByTestId(wrapper, IDS.CLICKED_TEXT);
  };

  it("Should change the count value upon clicking the button", async () => {
    mountApp();
    expect(clickedText.text()).toContain("You clicked this button 0 times");
    let clicked = 0;
    await clickButton.trigger("click");
    clicked++;
    await clickButton.trigger("click");
    clicked++;
    expect(clickedText.text()).toContain(
      `You clicked this button ${clicked} times`
    );
  });
});
