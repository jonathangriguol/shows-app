import React from 'react'
import Show from './Show'
import { render, screen } from '@testing-library/react'

const dummyData = {
    score: 0.9109179,
    show: {
        id: 139,
        url: "https://www.tvmaze.com/shows/139/girls",
        name: "Girls",
        type: "Scripted",
        language: "English",
        genres: [
        "Drama",
        "Romance"
        ],
        status: "Ended",
        runtime: 30,
        averageRuntime: 30,
        premiered: "2012-04-15",
        officialSite: "http://www.hbo.com/girls",
        schedule: {
        time: "22:00",
        days: [
            "Sunday"
        ]
        },
        rating: {
        average: 6.6
        },
        weight: 95,
        network: {
        id: 8,
        name: "HBO",
        country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
        }
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816"
        },
        image: {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        original: "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
        },
        summary: "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
        updated: 1611310521,
        _links: {
        self: {
            href: "https://api.tvmaze.com/shows/139"
        },
        previousepisode: {
            href: "https://api.tvmaze.com/episodes/1079686"
        }
        }
    }
}

const incompleteShow = {
    score: 0.9109179,
    show: {
        id: 139,
        url: "https://www.tvmaze.com/shows/139/girls",
        name: "Girls",
        type: "Scripted",
        language: "English",
        genres: [],
        status: "Ended",
        runtime: 30,
        averageRuntime: 30,
        premiered: "2012-04-15",
        officialSite: "http://www.hbo.com/girls",
        schedule: {
        time: "22:00",
        days: [
            "Sunday"
        ]
        },
        rating: {
        average: 6.6
        },
        weight: 95,
        network: {
        id: 8,
        name: "HBO",
        country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York"
        }
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
        tvrage: 30124,
        thetvdb: 220411,
        imdb: "tt1723816"
        },
        image: null,
        summary: "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
        updated: 1611310521,
        _links: {
        self: {
            href: "https://api.tvmaze.com/shows/139"
        },
        previousepisode: {
            href: "https://api.tvmaze.com/episodes/1079686"
        }
        }
    }
}

describe('Show Item', () => {
    test('With all needed info renders OK', async () => {
        const { findByRole, findAllByTestId } = render(<Show show={dummyData.show} />)
        const img = screen.getByRole('img')

        const title = await findByRole('heading')
        const genre = await findAllByTestId('genre-test')
        
        expect(img).toHaveAttribute('src', dummyData.show.image.medium)
        expect(title).toHaveTextContent(dummyData.show.name)
        expect(genre[0]).toHaveTextContent(dummyData.show.genres.join(", "))
    })

    test('Without image and genre info renders OK', async () => {
        const noImagePlaceholder = 'noimage.png'

        const { findByRole, findAllByTestId } = render(<Show show={incompleteShow.show} />)
        const img = screen.getByRole('img')

        const title = await findByRole('heading')
        const genre = await findAllByTestId('genre-test')
        
        expect(img).toHaveAttribute('src', noImagePlaceholder)
        expect(title).toHaveTextContent(incompleteShow.show.name)
        expect(genre[0]).toHaveTextContent('n/a')
    })
})