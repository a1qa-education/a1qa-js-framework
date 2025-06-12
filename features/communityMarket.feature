Feature: Validate Community Market

  Scenario: Filter by game, hero and rarity
    Given User opens the Steam main page
    When User navigates to the Community Market
    And User opens the advanced search options
    And User selects the game "Dota 2"
    And User selects the hero "Phantom Assassin"
    And User selects the rarity "Rare"
    And User clicks the search button
    Then Results are displayed with the correct message and tags
      | Dota 2    |
      | Anti-Mage |
      | Common    |
    When User selects the first item from the results
    Then user should see item with game "Dota 2" and hero "Used By: Phantom Assassin"

  Scenario: Filter and validate price sorting
    Given User opens the Steam main page
    When User navigates to the Community Market
    And User opens the advanced search options
    And User selects the game "Dota 2"
    And User selects the hero "Anti-Mage"
    And User selects the rarity "Uncommon"
    And User clicks the search button
    Then Results are displayed with the correct message and tags
      | Dota 2    |
      | Anti-Mage |
      | Common    |
    And Prices are shown in ascending order
    When User clicks the Price header to sort in descending order
    Then Prices are shown in descending order