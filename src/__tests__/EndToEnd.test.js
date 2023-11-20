// import userEvent from "@testing-library/user-event";
// import { input } from "@testing-library/user-event/dist/types/event";
import puppeteer from "puppeteer";
import CitySearch from "../components/CitySearch";
// import { input } from "@testing-library/user-event/dist/types/event";

describe("show and hide event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250, // slow down by 250ms,
      // timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("Event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details"); // Puppeteer provides the method page.$() for selecting an element on the page
    expect(eventDetails).toBeNull();
  });

  test("User can expand event details", async () => {
    await page.click(".event .details-btn");

    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse event details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250, // slow down by 250ms,
      // timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("#event-list");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn't searched for a city, show upcoming events from all cities", async () => {
    const eventlist = await page.$("#event-list");
    const listitems = await eventlist.$$("li");
    expect(listitems.length).toBe(32);
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.waitForSelector("#city-search");
    await page.type("#city-search input[type='text']", "Berlin");
    const suggestionListItems = await page.$$("#city-search li");
    expect(suggestionListItems.length).toBe(2);
  });

  test("User can select a city from the suggested list", async () => {
    await page.waitForSelector("#city-search");
    await page.$eval(
      "#city-search input[type='text']",
      (input) => (input.value = "")
    );
    await page.type("#city-search input[type='text']", "Berlin");
    const suggestionListItems = await page.$$("#city-search li");
    await suggestionListItems[0].click();
    const citySearchInputValue = await page.$eval(
      "#city-search input[type='text']",
      (input) => input.getAttribute("value")
    );
    expect(citySearchInputValue).toBe("Berlin, Germany");
  });
});
