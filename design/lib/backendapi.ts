const API_BASE = process.env.NEXT_PUBLIC_DJANGO_API_ENDPOINT

export const makeUrl = (endpoint: string) : string => {
    return API_BASE + endpoint;
}

/**
 * Letter
 */
export async function getLetterForHome(lang: string){
    let headers = {
        'Content-Type': 'application/json',
    };
    const res = await fetch(makeUrl("/api/letter/?type=home&lang="+lang), {
        method: 'GET',
        headers: headers
    })
    const json = await res.json()
    if(json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}

/**
 * Mass Schedule
 */

export async function getMassScheduleForHome(lang: string){
    let headers = {
        'Content-Type': 'application/json',
    };
    const res = await fetch(makeUrl("/api/massschedule/?type=home&lang="+lang), {
        method: 'GET',
        headers: headers
    })
    const json = await res.json()
    if(json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}
/**
 * About us
 */

export async function getAboutusForHome(lang: string){
    let headers = {
        'Content-Type': 'application/json',
    };
    const res = await fetch(makeUrl("/api/aboutus/?type=short&lang="+lang), {
        method: 'GET',
        headers: headers
    })
    const json = await res.json()
    if(json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}

export async function requestConfirm(uid: string | string[] , secretCode: string|string[]) {
    let headers = {
        'Content-Type': 'application/json',
    };
    const res = await fetch(makeUrl("/api/account/confirm"), {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            uid: uid,
            code: secretCode
        }),
    })
    const json = await res.json()
    if(json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}

export async function resetAccount(email: string) {
    let headers = {
        'Content-Type': 'application/json',
    };
    return fetch(makeUrl("/api/account/request-password"), {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            email: email
        }),
    });
}

export async function getListMasses(token: string) {
    let headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
    const res = await fetch(makeUrl("/api/getmass"), {
        method: 'GET',
        headers: headers,
        body: "",
    })
    const json = await res.json()
    console.log(json);
    if(json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}

/**
 * Create new user
 * @param username 
 * @param email 
 * @param password 
 * @returns 
 */
export async function fetchNewUser(username: string, email: string, password: string): Promise<Response> {
    const url = makeUrl("/api/account/create")
    console.log(url);
    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
    }),
    });
}


/**
 * Create new user
 * @param uid 
 * @param secretCode 
 * @param password 
 * @returns 
 */
 export async function fetchResetPassword(uid?: string, secretCode?: string, password?: string): Promise<Response> {
    const url = makeUrl("/api/account/reset-password")
    console.log(url);
    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: uid,
        code: secretCode,
        password: password
    }),
    });
}

/**
 * Create new user
 * @param username 
 * @param email 
 * @param password 
 * @returns 
 */
 export async function fetchUserRegsitrationList(token: string): Promise<Response> {
    let headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    };
    const res = await fetch(makeUrl("/api/massregister/register"), {
        method: 'GET',
        headers: headers
    })
    const json = await res.json()
    if(json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}