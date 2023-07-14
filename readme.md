# Repo Goal: Build several applications using REACT

1- FeedbackApp
2- Github finder
3- Fierbase House marketplace
4- Full stack MERN Application

# Concepts I plan to cover

    1. CRA basic todo app (only create / delete)
    2. Modal (editing items)
    3. Schedule view
        * side-by-side
        * learning: sharing state across components
    4. Search
        * hide all that don't match (from schedule too)
        * learn: logic (pure)
    5. Save state
        * learn: local storage
        * learn: initializing data and updating through a central point
    7. Showing current time as a line in the schedule

    7. Performance
        * optimizing renders
        * separate challenges (contrived examples)
    8. Developer tools / architecture
        * goal: unit tests, types (because it helps us scale out the code without breaking, decreased dev velocity, or decreased performance)
        * intro to unit tests (assignment)
        * intro to typescript (assignment)
        * attempt to bring into project (should be difficult)
        * intro to architecture (refactoring and organization) (opinionated)
            * code organization
                * modular vs functional directory structure
                * code types (define each and how it will tested / typed)
                    * pure cmp
                    * connected cmp
                    * logic (pure)
                    * example data
                    * services (singleton, stateful, effects) (hooks and hocs)
                        * mocks
            * functional patterns
                * centralize state
                * learn: redux architecture
                * services / daemons aka “sagas” (singletons) (hooks and hocs)
        * now do the unit tests, types, and performance optimizations
    9. Routing (schedule view)
    10. Libraries
        * material
        * redux
    11. E2E testing
        * React Testing Library
        * Cypress
